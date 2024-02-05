import React from "react";

const ProfileDataContent = ({data}) => {

    return (
        
            <div className="detail-content">
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <h1>{data.username}</h1>
                    <p>{data.email}</p>
                    <p>{data.password}</p>
                    <div>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>

            </div>

    )
}

export default ProfileDataContent;