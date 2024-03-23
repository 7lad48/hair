'use client'
import React, {FC} from 'react';
import {useFormik} from "formik";
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {sendMessage} from "@/api/telegram";
import styles from './Form.module.scss';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#000',
        },
    },
});

export type FormParamsType = {
    name: string
    phone: string
}
export const Form: FC = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
        },
        validate: (values) => {
            const errors: FormParamsType = {} as FormParamsType
            // if (!values.email) {
            //     errors.email = 'Required'
            // } else
            if(values.name.length < 3){
                errors.name = 'Минимальная длина имени 3 символа'
            }
            if (!/^\+375\d{2}\d{7}/.test(values.phone)) {
                errors.phone = 'Проверьте, правильно ли введён телефон'
                console.log(formik.errors)
            }
            return errors
        },
        onSubmit: values => {
            sendMessage(values)
                .then( (res) => {
                    formik.resetForm()
                })
                .finally(() => {
                    alert('done :)');
                })
        },
    });
    return (
        <ThemeProvider theme={theme}>
        <Grid container justifyContent={'center'}>
            <Grid item justifyContent={'center'}>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl>
                        <FormGroup>
                            <TextField
                                label="Имя"
                                margin="normal"

                                helperText={
                                    formik.touched.name && formik.errors.name ? (
                                        <span style={{ color: 'red' }}>{formik.errors.name}</span>
                                    ) : null
                                }
                                {...formik.getFieldProps('name')}
                                InputProps={{
                                    className: `${styles.textField}`
                                }}
                            />

                            <TextField
                                type="text"
                                label="Телефон"
                                margin="normal"
                                placeholder={'+375XXYYYYYYY'}
                                className={styles.textField}
                                helperText={
                                    formik.touched.phone && formik.errors.phone ? (
                                        <span style={{ color: 'red' }}>{formik.errors.phone}</span>
                                    ) : null
                                }
                                {...formik.getFieldProps('phone')}
                                InputProps={{
                                    className: styles.input
                                }}
                            />
                            <Button className={styles.button} type={'submit'} variant={'contained'} color={'primary'} disabled={!!Object.keys(formik.errors).length}>
                                Отправить
                            </Button>
                        </FormGroup>
                    </FormControl>
                </form>
            </Grid>
        </Grid>
        </ThemeProvider>
    );
}
