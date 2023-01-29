import React,{ useState } from 'react'
import style from "@/styles/topbar.module.css"
const Topbar = () => {

        const [isActive, setIsActive] = useState(false);
        const [selected, setSelected] = useState("");

        const options = ["Order","Created date","Due Date","Sitting count","Move count"];

  return (
   <>
    <section className={style.topbarContainer}>
        <div className={style.topbarDiv}>

          {/* left content  */}
          <div className={style.leftContent}>
            <h3 className={style.title}>Workflow</h3>
            <div className={style.leftIcons}>
                <ul className={style.IconsContainer}>
                    <li className={style.leftIconWrapper}>
                        <img className={style.Icon} src="/images/workflow-active.png" alt="icon" />
                        {/* <img className={style.Icon} src="/images/workflow.png" alt="icon" /> */}
                    </li>
                    <li className={style.leftIconWrapper}>
                        <img className={style.Icon} src="/images/design.png" alt="icon" />
                        {/* <img className={style.Icon} src="/images/design-active.png" alt="icon" /> */}
                    </li>
                    <li className={style.leftIconWrapper}>
                        <img className={style.Icon} src="/images/code.png" alt="icon" />
                        {/* <img className={style.Icon} src="/images/code-active.png" alt="icon" /> */}
                    </li>
                    <li className={style.leftIconWrapper}>
                        <img className={style.Icon} src="/images/announcement.png" alt="icon" />
                        {/* <img className={style.Icon} src="/images/announcement-active.png" alt="icon" /> */}
                    </li>
                </ul>

                {/* divider line  */}
                <div className={style.leftDivider}></div>

                <ul className={style.IconsContainer}>
                    <li className={style.IconsItem}>
                        <img className={style.userPorfilePic} src="/images/user3.png" alt="user image" />
                        <div className={style.msgCounter}>2</div>
                    </li>
                    <li className={style.IconsItem}>
                        <img className={style.userPorfilePic} src="/images/user4.png" alt="user image" />
                        <div className={style.msgCounter}>5</div>
                    </li>
                    <li className={style.IconsItem}>
                        <img className={style.userPorfilePic} src="/images/user5.png" alt="user image" />
                        <div className={style.msgCounter}>1</div>
                    </li>
                    <li className={style.IconsItem}>
                        <img className={style.userPorfilePic} src="/images/user6.png" alt="user image" />
                        <div className={style.msgCounter}>4</div>
                    </li>
                </ul>
            </div>
          </div>

          {/* right content */}
          <div>
            <ul className={style.IconsContainerRight}>
                <li className={style.rightIconWrapper}>
                    <img src="/icons/pinned.svg" alt="pinned icon" />
                </li>
                <li className={style.rightIconWrapper}>
                    <img src="/icons/double-file.svg" alt="file icon" />
                </li>
                <li className={style.rightIconWrapper}>
                    <img src="/icons/save.svg" alt="save icon" />
                    <span className={style.ItemText}>Views</span>
                </li>
                <li className={style.rightIconWrapper}>
                    <img src="/icons/filter.svg" alt="filter icon" />
                    <span className={style.ItemText}>Filter</span>
                </li>
                <li className={style.rightIconWrapper} onClick={e => {setIsActive(true)}}>
                    <img src="/icons/sort-by.svg" alt="sort-by icon" />
                    <span className={style.ItemText}>Sort By</span>
                </li>
            </ul>
          </div>

          {/* Sort by dropdown  */}
          {isActive && <div className={style.sortbyDropdown}>
            <div className={style.sortbyHead}>
                <div className={style.sortbyLeft}>
                    <img className={style.sortHeadIcon} src="/icons/sort-by.svg" alt="icon" />
                    <span className={style.sortbyTitle}>Sort By</span>
                </div>
                <div onClick={e => {setIsActive(false)}}>
                    <img className={style.sortHeadIconClose} src="/icons/close-gray.svg" alt="close icon" />
                </div>
            </div>
            <div className={style.sortbyContent}>
                <ul className={style.sortbyList}>
                {options.map && options.map((option , index)=>{
                    return(
                    <li key={index} className={`${style.sortbyItem} ${selected == option && style.sortbyActive }`} onClick={(e) => { setSelected(option) , setIsActive(false)}}>{option}</li>
                    )
                })}
                    
                </ul>
            </div>
          </div>}

        </div>
    </section>
   </>

  )
}

export default Topbar