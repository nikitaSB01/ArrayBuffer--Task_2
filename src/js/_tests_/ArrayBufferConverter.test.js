// прописать import все файлы JS
import ArrayBufferConverter, { getBuffer } from '../ArrayBufferConverter';
// начать тесты
test('Тестируем метод load(). Если объекты совпадают - sucess', () => {
  const buffer = getBuffer();
  ArrayBufferConverter.load(buffer);
  expect(ArrayBufferConverter.buffer).toEqual(buffer);
});

test('Тестируем метод toString() 1', () => {
  const buffer = getBuffer();
  ArrayBufferConverter.load(buffer);
  expect(ArrayBufferConverter.buffer).toEqual(buffer);
});
test('Тестируем метод toString() 2', () => {
  const receivedString = ArrayBufferConverter.toString();
  const exampleString = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(receivedString).toBe(exampleString);
});
