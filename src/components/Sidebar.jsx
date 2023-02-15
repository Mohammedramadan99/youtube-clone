import { Stack } from "@mui/material"
import { categories } from "../utils/constants"


function Sidebar({selectedCategory,setSelectedCategory}) {
    
  return (
    <Stack 
        direction="row"
        sx={{
            overflowY:"auto",
            height:{sx:'auto',md:'95%'},
            flexDirection:{md:'column'},
        }}
    >
        {categories?.map(category => (
            <button
                key={category?.name}
                className="category-btn"
                style={{
                    background:category.name === selectedCategory && '#FC1503',
                    color:'white'
                }}
                onClick={() => setSelectedCategory(category?.name)}
            >
                <span
                    style={{
                        color: category.name === selectedCategory ? '#fff' : '#FC1503',
                        marginRight:"10px"}}> {category.icon} </span>
                <span 
                    style={{
                        opacity:  category.name === selectedCategory ? '1' : '.8'
                    }}
                    > {category.name} </span>
            </button>
        ))}
    </Stack>
  )
}

export default Sidebar