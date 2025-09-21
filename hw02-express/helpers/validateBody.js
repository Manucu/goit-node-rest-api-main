export const validateBody = (schema) => (req, _res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    error.status = 400;
    error.message = error.message || "Bad Request";
    return next(error);
  }
  next();
};
