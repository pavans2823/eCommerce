import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class ProductsUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            description: '',            
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputDescription = async event => {
        const description = event.target.value
        this.setState({ description })
    }


    handleUpdateProduct = async () => {          
        const { id, name, description } = this.state     
        const payload = { name, description }

        await api.updateProductById(id, payload).then(res => {
            window.alert(`Product updated successfully`)
            this.setState({
                name: '',
                description: '',                
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const product = await api.getProductById(id)

        this.setState({
            name: product.data.data.name,
            description: product.data.data.description,            
        })
    }

    render() {
        const { name, description} = this.state
        return (
            <Wrapper>
                <Title>Create Product</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Description: </Label>
                <InputText
                    type="text"
                    value={description}
                    onChange={this.handleChangeInputDescription}
                />               

                <Button onClick={this.handleUpdateProduct}>Update Product</Button>
                <CancelButton href={'/products/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default ProductsUpdate