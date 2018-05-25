import * as React from 'react';

export interface HelloProps {
	name: string;
  age: number;
  [propName: string]: any;
}

export const MainFooter = (props: HelloProps) => {
	return (
		<div>
			<h1>name: {props.name}</h1>
      <h1>age: {props.age}</h1>
      <h1>sex: {props.sex}</h1>
      <h1>sex: {props.city}</h1>
		</div>
	);
};
