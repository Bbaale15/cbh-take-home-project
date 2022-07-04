const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  if (event) {
    const data = JSON.stringify(event);
    candidate = event.partitionKey || createHash(data);
  }

  if (typeof candidate !== "string"){
    candidate = JSON.stringify(candidate);
  }

  if (!candidate) {
    candidate = TRIVIAL_PARTITION_KEY;
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = createHash(candidate);
  }
  return candidate;
};

function createHash(value) {
  return crypto.createHash("sha3-512").update(value).digest("hex");
}