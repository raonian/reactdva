import User from '../components/user/User.jsx';
import { connect } from 'dva';

function mapStateToProps({ user }) {
    return { ...user };
}

function mapDiapatchToProps(dispatch, props) {
    return {
        getName() {
            dispatch({type: 'user/getName'});
        }
    };
}

const UserPage = connect(mapStateToProps, mapDiapatchToProps)(User);

export default UserPage;