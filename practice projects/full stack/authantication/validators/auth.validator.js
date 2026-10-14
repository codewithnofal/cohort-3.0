import {body, validationResult} from 'express-validator'


export const registerValidation = [
    body("name")
    .exists().withMessage("name is required").bail()
    .isString().withMessage("name must be a string").bail()
    .trim()
    .isLength({min: 3}).withMessage("name must be minimum 3 char long").bail()
    .isLength({max: 20}).withMessage("name must be maximum 20 char long").bail(),

    body("email")
    .exists().withMessage("email is required").bail()
    .isString().withMessage("email must be a string").bail()
    .trim()
    .isEmail().withMessage("enter a valid email address").bail()
    .toLowerCase(),

    body('password')
    .exists().withMessage("password is required").bail()
    .isString().withMessage("password must be a string").bail()
    .custom((value) => value.trim().length > 0).withMessage("password cannot be empty or only spaces").bail()
    .isLength({max: 6}).withMessage("password must be at least 8 char long"),

    (req, res, next) => {
        const error = validationResult(req)

        if(!error.isEmpty()){
            res.status(400).json({
                message: "validation failed",
                error: error.array()
            })
        }

        next();
    }
]