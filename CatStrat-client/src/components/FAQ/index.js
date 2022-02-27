
export default function FAQ({ loginUserID }) {

    const userID = localStorage.getItem('userID')

    // let navigate = useNavigate();

    // useEffect(() => {
    //     Axios.get(`/strategy/${userID}`)
    //     if (userID) {
    //         console.log('userID', userID)
    //         Axios.get(`/strategy/${userID}`)
    //             .then((res) => {
    //                 console.log('response', res.data)
    //                 setData(res.data)
    //             })
    //     } else {
    //         // navigate("/");
    //     }
    // }, [loginUserID, creation]);


    return (
        <section className="full-container">
            <div className="strategies">
                <h1>Frequently Asked Questions</h1>
                <details className="faq">
                    <summary className="question">How can I purchase more CatCoins?</summary>
                    <p>Click on the CatCoin icon on the Navbar. That will redirect you to a page where you can purchase bundles of CatCoins.</p>
                </details>
            
                <details className="faq">
                    <summary>Where can I see my friend's CatStrat Profile?</summary>
                    <p>As long as you know your friend's username, you can search for your friend using the search function in the Navbar.</p>
                </details>

                <details className="faq">
                    <summary>What is the mystery box in the CatCoin Shop?</summary>
                    <p>Purchasing the mystery box will give you a randomized amount of coins between 1 to 200.</p>
                </details>

                <details className="faq">
                    <summary>Who are the founders of CatStrat?</summary>
                    <p>James Huang, Allen Zhao, and Diana Kuang. You can connect with us on LinkedIn!</p>
                </details>

                <details className="faq">
                    <summary>Why do I have 100 CatCoins on my account already?</summary>
                    <p>There is currently a promotion for new users to gain 100 CatCoins for registering!</p>
                </details>

                <details className="faq">
                    <summary>How can I create custom strategies?</summary>
                    <p>Go to the Strategy Info tab and click on the plus sign at the bottom of the strategy list. That will open up a form to create a new custom strategy.</p>
                </details>

                <details className="faq">
                    <summary>Why is it called CatStrat and not DogStrat?</summary>
                    <p>Because we are cat people.</p>
                </details>

                <details className="faq">
                    <summary>How can I delete a record in my calendar?</summary>
                    <p>Click on the specific record in the calendar. That will open a form on the right-side. Click the delete button at the bottom of the form to delete the record.</p>
                </details>

            </div>

        </section>
    );
}