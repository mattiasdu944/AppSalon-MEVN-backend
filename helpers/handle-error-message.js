export const handleErrorMessage = (message, res) => {
    return res.status(404).json({
        message
    });
}