import React from 'react'

export function ContentHeaderSection(props) {
    const { contentHeader } = props;
    console.log("contentHeader==>",contentHeader)
    return (
        <>
            <section className="content-header">
                <div className="header-icon">
                    <i className={contentHeader?.icon}></i>
                </div>
                <div className="header-title">
                    <h1>{contentHeader?.titel}</h1>
                    <small>{contentHeader?.subTitle}</small>
                </div>
            </section>
        </>
    )
}