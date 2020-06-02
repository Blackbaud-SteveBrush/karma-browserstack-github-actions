import {
  getMessage
} from './sample';

describe('sample', function () {
  it('should return message', function () {
    expect(getMessage()).toEqual('Hello, world!');
  });
});
