import gql from 'graphql-tag';

export const CREATE_USER = gql`
	mutation createUser($data: UserCreateInput!) {
		createUser(
			data: $data
		) {
			id
		}
	}
`;
