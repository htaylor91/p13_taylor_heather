import Account from './Account';

/** Factory function to create an account object */
function createAccount(
    accountType: string,
     /** Account identifier (e.g. x8349) */
    accountIdentifier: string,
    accountBalance: number, 
    bank: string = "Argent Bank") {

        const title = `${bank} ${accountType} (${accountIdentifier})`;
        const description = accountType === 'Credit Card' 
        ? 'Current Balance' : 'Available Balance';

        return {
            title,
            accountBalance,
            description
        };
}

/** Array of user accounts */
const userAccounts = [
    createAccount('Checking', 'x8349', 2082.79),
    createAccount('Savings', 'x6712', 10928.42),
    createAccount('Credit Card', 'x8349', 184.30)
];

function UserAccounts() {
    return (
        <section>
            <h2 className="sr-only">Accounts</h2>
            
            {userAccounts.map((account, index) => (
                <Account
                    key={`account-${index}`}
                    title={account.title}
                    accountBalance={account.accountBalance}
                    description={account.description}
                />
            ))}
        </section>
    );
}

export default UserAccounts;