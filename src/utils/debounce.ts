export function debounce(func: Function, wait: number) {
  let timeout: NodeJS.Timeout | null = null;
    return function (this: any, ...args: any[]) {
        if (timeout) {
            clearTimeout(timeout);
        }   
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    }
}