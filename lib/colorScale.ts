export function colorScale(value: number): string {
    const hue = ((1 - value / 100) * 240).toString(10)
    return `hsl(${hue}, 100%, 50%)`
}