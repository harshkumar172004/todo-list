export const getZodError = (error) => {
    const errors = error.errors || error.issues || []
    const newError = {}
    errors.forEach(err => {
        newError[err.path[0]] = err.message
    });
    return newError
}
