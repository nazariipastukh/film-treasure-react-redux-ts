import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import {useTheme} from "../../../hoc";
import styles from './Search.module.css'

interface IFormData {
    value: string
}

export const SearchComponent = () => {
    const {reset, register, handleSubmit, formState: {isValid}} = useForm({
        mode: 'onChange'
    })
    const navigate = useNavigate()
    const {themeTrigger} = useTheme();

    const search = (formData: IFormData) => {
        const inputValue = formData.value
        navigate(`/search/${inputValue}`)
        reset()
    }

    return (
        <form className={`${styles.form} ${themeTrigger ? styles.dark : ''} `} onSubmit={handleSubmit(search)}>
            <section className={styles.searchWrap}>
                <input type={'text'} placeholder={'Search'} {...register('value', {required: true})} />
                <button disabled={!isValid}>🔍</button>
            </section>
        </form>
    );
};