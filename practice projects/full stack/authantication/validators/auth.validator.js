import {body, validationResult} from 'express-validator'


export const registerValidation = [
    body("name")
    .exists().withMessage("name is required").bail()
    .isString().withMessage("name must be a string").bail()
    .trim()
    .isLength({min: 3}).withMessage("name must be minimum 3 char long").bail()
    .isLength({max: 20}).withMessage("name must be maximum 20 char long").bail()
]