export const createError = (status,message)=> {
    const err = new Error()
    status = err.status
    message = err.message
    return err
}