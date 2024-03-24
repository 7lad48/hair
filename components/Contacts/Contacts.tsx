import React from 'react';
import {Form} from "@/components/Contacts/Form/Form";
import styles from './Contacts.module.scss'

export const Contacts = () => {
    return (
        <section id={'contacts'} className={styles.contacts}>
            <h3 className={'title'}>Контакты</h3>
                <Form/>
        </section>
    );
}