import '../styles/account.css'

export type AccountProps = {
    title: string,
    /**
     * Dollar amount in USD (e.g. 2082.79)
     */
    accountBalance: number,
    description: string
}

function Account({title, accountBalance, description}: AccountProps){

    const accountAmount = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(accountBalance);

    return (
        <article className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">{accountAmount}</p>
                <p className="account-amount-description">{description}</p>
            </div>
            <div className="account-content-wrapper cta">
            <button className="transaction-button" type="button" >View transactions</button>
            </div>
        </article>
    )
}

export default Account