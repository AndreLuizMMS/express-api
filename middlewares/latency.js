function latency(req, res, next) {
  const start = Date.now();
  next();

  const delta = Date.now() - start;
  console.log(` ${req.baseUrl}   in ${delta}ms`);
}

module.exports = latency;
