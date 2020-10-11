const enumerableToArray = enumerable => {
    const result = []
    for (let i = 0; i < enumerable.length; i++) {
        result.push(enumerable[i])
        
    }
    return result;
}