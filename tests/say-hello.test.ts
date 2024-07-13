import { sayHello } from "../src/say-hello";

describe( "sayHello", function (): void {
    it('should return hello master wayne', function (): void {
        expect(sayHello('Master Wayne')).toBe('Hello Master Wayne')
    })
})