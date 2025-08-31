import { List, ListItemButton, ListItemText } from "@mui/material";

export default function AnchorMenu({sections}) {
  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <List
      sx={{
        position: "sticky",
        top: 100,
        width: 200,
        bgcolor: "background.paper",
      }}
    >
      {sections.map((section) => (
        <ListItemButton key={section.id} onClick={() => handleClick(section.id)}>
          <ListItemText primary={section.label} />
        </ListItemButton>
      ))}
    </List>
  );
}