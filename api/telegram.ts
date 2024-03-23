import {FormParamsType} from "@/components/Contacts/Form/Form";
import axios from "axios";
const TOKEN = '7024563120:AAEgrpwrDyhVXzlny-0Fs1RvHZIe_88eAbM';
const CHAT_ID = '-4111599956';
const baseUrl =
    `https://api.telegram.org/bot${TOKEN}/sendMessage`
export const sendMessage = async (message: FormParamsType): Promise<void> => {
    let orderMessage = `
            <b>Имя:</b>     ${message.name}

            <a href="tel:${message.phone}">${message.phone}</a>
            `;
    axios.post(baseUrl, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: orderMessage,
    })
        .then((res) => {

        })
        .catch((err) => {
            console.warn(err);
        })
        .finally(() => {
            console.log('Готово!');
        });
}