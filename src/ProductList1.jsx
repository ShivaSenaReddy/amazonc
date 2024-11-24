import React, { useEffect } from 'react'

function ProductList() {

    useEffect(() => {
        async function fetchAmazon() {
            const url = 'https://real-time-amazon-data.p.rapidapi.com/search?query=Phone&page=1&country=in&sort_by=RELEVANCE&product_condition=ALL&is_prime=false&deals_and_discounts=NONE';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'adde578a2bmshda2987bb45215a2p191f3djsn5823faaf4ca9',
                    'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.text();
                // const status = result.status
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        }
        fetchAmazon()
    }, [])
    return (
        <div className='ProductList'>
            <div className=''>

            </div>
        </div>
    )
}

export default ProductList
