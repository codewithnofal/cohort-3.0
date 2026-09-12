import urlModel from "../models/url.model.js";
import { generateCode } from "../utils/generateCode.js";

export const createUrlController = async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({
      message: "	Please enter a URL",
    });
  }

  if (
    url.startsWith("http://") === false &&
    url.startsWith("https://") === false
  ) {
    return res.status(400).json({
      message: "	Please enter a valid URL starting with http:// or https://",
    });
  }

  if (url.length > 2048) {
    return res.status(400).json({
      message: "URL is too long",
    });
  }

  const code = generateCode();

  const newUrl = await urlModel.create({
    originalUrl: url,
    shortCode: code,
  });

  try {
    res.status(201).json({
      message: "Url created successfully",
      data: {
        originalUrl: newUrl.originalUrl,
        shortCode: newUrl.shortCode,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

export const getAllUrlController = async (req, res) => {
  const urls = await urlModel.find();

  try {
    return res.status(200).json({
      message: "all urls fetched successfully",
      urls,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
};

export const deleteUrlController = async (req, res) => {
  const { code } = req.params;

  const deleteUser = await urlModel.findOneAndDelete({ shortCode: code });

  return res.status(200).json({
    message: "Url deleted successfully",
  });
};
