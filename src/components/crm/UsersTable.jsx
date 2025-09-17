import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,
  Box,
  Tooltip,
} from "@mui/material";
import Person from "@mui/icons-material/Person";
import Business from "@mui/icons-material/Business";
import ToggleOn from "@mui/icons-material/ToggleOn";
import ToggleOff from "@mui/icons-material/ToggleOff";
import Delete from "@mui/icons-material/Delete";
import AdminPanelSettings from "@mui/icons-material/AdminPanelSettings";

const UsersTable = ({
  users,
  currentUser,
  actionLoading,
  onToggleUserType,
  onDeleteClick,
}) => {
  const getUserTypeColor = (isBusiness) => {
    return isBusiness ? "primary" : "default";
  };

  const getUserTypeIcon = (isBusiness) => {
    return isBusiness ? <Business /> : <Person />;
  };

  const getAdminIcon = (isAdmin) => {
    return isAdmin ? <AdminPanelSettings /> : null;
  };

  return (
    <TableContainer component={Paper} variant="outlined">
      <Table>
        <TableHead>
          <TableRow sx={{ bgcolor: "primary.50" }}>
            <TableCell>
              <strong>Name</strong>
            </TableCell>
            <TableCell>
              <strong>Email</strong>
            </TableCell>
            <TableCell>
              <strong>Phone</strong>
            </TableCell>
            <TableCell>
              <strong>Account Type</strong>
            </TableCell>
            <TableCell>
              <strong>Actions</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id} hover>
              <TableCell>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  {user.name?.first} {user.name?.last}
                  {user.isAdmin && (
                    <Chip
                      icon={<AdminPanelSettings />}
                      label="Admin"
                      size="small"
                      color="error"
                      variant="outlined"
                    />
                  )}
                </Box>
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Chip
                  icon={getUserTypeIcon(user.isBusiness)}
                  label={user.isBusiness ? "Business" : "Regular"}
                  color={getUserTypeColor(user.isBusiness)}
                  variant="outlined"
                  size="small"
                />
              </TableCell>
              <TableCell>
                <Box sx={{ display: "flex", gap: 1 }}>
                  {!user.isAdmin && (
                    <Tooltip
                      title={`Change to ${
                        user.isBusiness ? "Regular" : "Business"
                      } account`}
                    >
                      <IconButton
                        onClick={() =>
                          onToggleUserType(
                            user._id,
                            user.isBusiness ? "business" : "regular"
                          )
                        }
                        disabled={actionLoading === user._id}
                        color="primary"
                        size="small"
                      >
                        {user.isBusiness ? <ToggleOn /> : <ToggleOff />}
                      </IconButton>
                    </Tooltip>
                  )}

                  <Tooltip
                    title={
                      user._id === currentUser._id
                        ? "Cannot delete yourself"
                        : user.isAdmin
                        ? "Delete Admin User (Dangerous!)"
                        : "Delete User"
                    }
                  >
                    <span>
                      <IconButton
                        onClick={() => onDeleteClick(user)}
                        disabled={
                          actionLoading === user._id ||
                          user._id === currentUser._id
                        }
                        color="error"
                        size="small"
                        sx={{
                          opacity: user._id === currentUser._id ? 0.3 : 1,
                        }}
                      >
                        <Delete />
                      </IconButton>
                    </span>
                  </Tooltip>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UsersTable;
