export abstract class CacheService {
  protected getItem<T>(key: string): T {
    let data = localStorage.getItem(key);
    let result: any;
    if (data == null) {
      data = 'undefined';
    }

    result = JSON.parse(data);
    //this is kind of hack and Angular weakness
    if (data && data !== 'undefined') {
      return result;
    } else {
      return result;
    }
  }

  protected setItem(key: string, data: object | string) {
    if (typeof data === 'string') {
      localStorage.setItem(key, data);
    }
    localStorage.setItem(key, JSON.stringify(data));
  }

  protected removeItem(key: string) {
    localStorage.removeItem(key);
  }

  protected clear() {
    localStorage.clear();
  }
}
