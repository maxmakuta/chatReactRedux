import React, {useState, useEffect} from 'react';
import s from './ProfileInfo.module.css';


const ProfileStatusHooks = (props) => {
    const [editMode, seteditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    useEffect(() => {
        return () => {
            setStatus(props.status)
        };
    }, [props.status]);
    

    const activateEditMode = () => {
        seteditMode(true);
    };
    const deactivateEditMode = () => {

        seteditMode(false);

        props.updateStatus(status);
    }
    const onStatusChange = (e) => {

            setStatus(e.currentTarget.value)

    }


    return (
        <div>
            {!editMode &&
            <div className={s.status}>

                <span className={s.status} onDoubleClick={activateEditMode}>{props.status || "NONE"} </span>
            </div>
            }
            {editMode &&
            <div className={s.descriptionBlok}>
                <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange}
                       value={status}/>
            </div>
            }


        </div>
    )

}

export default ProfileStatusHooks;