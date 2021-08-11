export class Guid extends String {
    static NewGuid(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            var r = (Math.random() * 16) | 0,
                v = c == 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }

    static Empty = '00000000-0000-0000-0000-000000000000';
}
