const sum = (a, b) => {
    return a + b;
}

export const sub = (a, b) => {
    return a - b;
}

export { sum };

export const version = '1.0';

const math = {
    sum: sum,
    sub: sub,
    version: version,
}

export default math;