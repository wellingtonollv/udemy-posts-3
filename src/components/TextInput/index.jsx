import './styles.css';

export const TextInput= ({searchValue, handleChange}) => {
    return(
        <input className="text-input" placeholder="insira sua busca..." type="search" onChange={handleChange} value={searchValue} />
    );
}