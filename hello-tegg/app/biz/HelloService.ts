import {
  AccessLevel,
  SingletonProto,
} from 'egg';

@SingletonProto({
  accessLevel: AccessLevel.PUBLIC,
})
export class HelloService {
  async hello(name: string): Promise<string> {
    return `hello, ${name}`;
  }
}
