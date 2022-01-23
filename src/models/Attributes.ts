export class Attributes<T> {
  constructor(private data: T) { }

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key]
  }

  set(update: T): void {
    Object.assign(this.data, update) // this will copy the second object to the first one
  }

  getAll(): T {
    return this.data
  }
}