import React from "react";

function Add_popup() {
    return (
        <div className="popup">
            <h2>Add New Topic</h2>
            <form>
                <input type="text" placeholder="Topic Name" />
                <textarea placeholder="Topic Description" />
                <button type="submit">Add Topic</button>
            </form>
        </div>
    );
}