import React, { useState, useEffect } from 'react'
import { Card, Icon, Button, Label } from 'semantic-ui-react'
import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        width: '60% !important',
    },
    des: {
        minHeight: '100px',
        wordBreak: 'break-word'
    },
    extra: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    extraRight: {
        display: 'flex',
        flexDirection: 'row-reverse'
    }
});

const IP = process.env.REACT_APP_SERVER

const CardExampleExtraContent = (props) => {
    const classes = useStyles();
    const { name, content, like, time, id } = props

    const [likenum, setLikenum] = useState(like)
    const [disable, setDisable] = useState(false)

    useEffect(() => {
        setLikenum(like);
    }, [props])

    useEffect(() => {
        setDisable(false);
    }, [props])


    const handleClick = () => {
        setLikenum(likenum + 1)
        setDisable(true)
        axios.post(`${IP}/like`, {
            id: id,
            like: likenum
        })

    }

    const btn = (disable) => {
        return disable ?
            (
                <Button color='red' disabled>
                    <Icon name='heart' />Like
                </Button>
            )
            :
            (
                <Button color='red' onClick={handleClick}>
                    <Icon name='heart' />Like
                </Button>
            )
    }

    return (
        <Card className={classes.card}>
            <Card.Content header={name} />
            <Card.Content description={content} className={classes.des} />
            <Card.Content extra className={classes.extra}>
                <Button as='div' labelPosition='right'>
                    {btn(disable)}
                    <Label as='a' basic color='red' pointing='left'>
                        {likenum}
                    </Label>
                </Button>
                <div>
                    <Icon name='user' /> {time}
                </div>
            </Card.Content>
        </Card>
    )
}

export default CardExampleExtraContent

