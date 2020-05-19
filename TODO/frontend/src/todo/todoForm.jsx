import React from "react";
import Grid from "../template/grid";
import Button from "../template/iconButton";



export default props => (
    <div role="from" className="todoForm">
        <Grid cols="12 9 10">
            <input 
            id="description" 
            className="form-control" 
            placeholder="Adicionar tarefa" 
            value={props.description}
            onChange={props.handleChanger} ></input>
        </Grid> 
        
        <Grid cols="12 3 2">   
            <Button style="primary" icon="plus" onClick={props.handleAdd}></Button>
            <Button style="info" icon="search" onClick={props.handleSearch}></Button>
            <Button style="default" icon="close" onClick={props.handleClear}></Button>
        </Grid>
    </div>
);