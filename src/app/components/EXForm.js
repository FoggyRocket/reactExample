import React from "react";
import { Form, FormInput, FormGroup,Button } from "shards-react";

export default function EXForm({handleChange,onPress,username,password,data}=this.props) {
  return (
    <Form>
      <FormGroup>
        <label htmlFor="#username">Username</label>
        <FormInput 
            id="#username"
            placeholder="Username"
            name='username'
            onChange={handleChange}
            value={username? username:''} 
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="#password">Password</label>
        <FormInput 
            
            type="password"
            id="#password"
            placeholder="Password" 
            name='password' 
            onChange={handleChange} 
            value={password? password:''}
            />
      </FormGroup>
      <Button onClick={onPress}>Inciar</Button>
    </Form>
  );
}