import { SafeUrlPipe } from './safe-url.pipe';
import { DomSanitizer } from '@angular/platform-browser';

describe('SafeUrlPipe', () => {
  let sanitizerSpy: jasmine.SpyObj<DomSanitizer>;
  let pipe: SafeUrlPipe;

  beforeEach(() => {
    sanitizerSpy = jasmine.createSpyObj('DomSanitizer', ['bypassSecurityTrustResourceUrl']);
    pipe = new SafeUrlPipe(sanitizerSpy);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform url using sanitizer', () => {
    const url = 'https://example.com';
    const safeUrl = 'safe-url';

    sanitizerSpy.bypassSecurityTrustResourceUrl.and.returnValue(safeUrl as any);

    const result = pipe.transform(url);
    expect(result).toBe(safeUrl);
    expect(sanitizerSpy.bypassSecurityTrustResourceUrl).toHaveBeenCalledWith(url);
  });
});
