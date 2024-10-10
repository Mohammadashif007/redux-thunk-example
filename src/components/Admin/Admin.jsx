import {
    useAddAccountsMutation,
    useDeleteAccountsMutation,
    useGetAccountsQuery,
    useUpdateAccountsMutation,
} from "../../redux/api/adminSlice";

const Admin = () => {
    const { data, isLoading, error, isSuccess } = useGetAccountsQuery();
    const [addAccount] = useAddAccountsMutation();
    const [deleteAccount] = useDeleteAccountsMutation();
    const [updateAccount] = useUpdateAccountsMutation();
    return (
        <div className="text-white flex flex-col items-center  p-10">
            <h1>Admin components</h1>
            {isLoading ? <p>Loading...</p>: null}
            {isSuccess && data &&
                data.map((account, idx) => (
                    <p key={idx}>
                        {account.id}: {account.amount}
                        <button
                            onClick={() => deleteAccount(account.id)}
                            className="bg-sky-700 p-3 rounded-md"
                        >
                            Delete Account
                        </button>
                        <button
                            onClick={() =>
                                updateAccount({ id: account.id, amount: 911 })
                            }
                            className="bg-sky-700 p-3 rounded-md"
                        >
                            Update Account
                        </button>
                    </p>
                ))}
            <button
                onClick={() => addAccount(777, data.length + 1)}
                className="bg-sky-700 p-3 rounded-md"
            >
                Add Account
            </button>
        </div>
    );
};

export default Admin;
