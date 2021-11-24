import React from 'react'
import { Typography, Button, Divider } from '@material-ui/core'
import Review from './Review'

const PayMentForm = ({ checkoutToken, backStep }) => {
    return (
        <>
            <Review checkoutToken={checkoutToken} />
            <Divider />
            <Typography varian="h6" gutterBottom style={{ margin: '20px 0' }}>Payment method</Typography>
            <form>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button variant="outlined" onClick={backStep}>Back</Button>
                    <Button type="submit" variant="contained" color="primary">
                        Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                    </Button>
                </div>
            </form>
        </>
    )
}

export default PayMentForm
