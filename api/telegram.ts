const TOKEN = '7024563120:AAEgrpwrDyhVXzlny-0Fs1RvHZIe_88eAbM';
const CHAT_ID = '-4111599956';
const baseUrl =
    `https://api.telegram.org/bot${TOKEN}/`
export const sendMessage = async (message: string): Promise<void> => {
    const url = `${baseUrl}sendMessage?chat_id=${CHAT_ID}&text=${message}`;
    const response = await fetch(url);
    if(!response.ok) {
        const error = await response.json();
        await Promise.reject(error.description || 'Что-то пошло не так...')
    }
}