export default function idReferenceCounter(initial = 0) {
    let count = initial;
    return {
        next() {
            return ++count;
        },
        current() {
            return count;
        },
        reset(val = 0) {
            count = val;
        }
    };
}