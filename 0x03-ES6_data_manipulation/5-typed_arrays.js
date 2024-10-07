export default function createInt8TypedArray(length, position, value) {
  if (!Number.isInteger(length) || length < 0) {
    throw new Error('Invalid buffer length');
  }

  if (!Number.isInteger(value) || value < -128 || value > 127) {
    throw new Error('Value out of Int8 range');
  }

  const buffer = new ArrayBuffer(length);

  const int8View = new Int8Array(buffer);

  if (position < 0 || position >= int8View.length) {
    throw new Error('Position outside range');
  }

  int8View[position] = value;

  const dataView = new DataView(buffer);
  return dataView;
}
