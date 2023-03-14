import { ToLowerCasePipe } from './to-lower-case.pipe';

describe('ToLowerCasePipe', () => {
  it('create an instance', () => {
    const pipe = new ToLowerCasePipe();
    expect(pipe).toBeTruthy();
  });
});
