import React, { useState, useEffect } from "react";
import {
  Container,
  Paper,
  Typography,
  Box,
  Alert,
  CircularProgress,
  Pagination,
} from "@mui/material";
import AdminPanelSettings from "@mui/icons-material/AdminPanelSettings";
import { useUser } from "../users/providers/UserProvider";
import {
  getAllUsers,
  updateUserStatus,
  deleteUser,
} from "../users/services/userService";
import UsersTable from "../components/crm/UsersTable";
import UserStats from "../components/crm/UserStats";
import DeleteUserDialog from "../components/crm/DeleteUserDialog";
import PaginationInfo from "../components/crm/PaginationInfo";
import SearchBar from "../components/crm/SearchBar";

const CRM = () => {
  const { token, user: currentUser } = useUser();
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [displayedUsers, setDisplayedUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [actionLoading, setActionLoading] = useState("");
  const [deleteDialog, setDeleteDialog] = useState({ open: false, user: null });
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const data = await getAllUsers(token);
        setAllUsers(data);
        setFilteredUsers(data);
      } catch (err) {
        setError("Failed to load users. Please try again later.");
        console.error("Error fetching users:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [token]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredUsers(allUsers);
    } else {
      const filtered = allUsers.filter((user) => {
        const fullName = `${user.name?.first || ""} ${
          user.name?.last || ""
        }`.toLowerCase();
        const email = (user.email || "").toLowerCase();
        const search = searchTerm.toLowerCase();
        return fullName.includes(search) || email.includes(search);
      });
      setFilteredUsers(filtered);
    }
    setCurrentPage(1);
  }, [searchTerm, allUsers]);

  useEffect(() => {
    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
    setTotalPages(totalPages);
    const startIndex = (currentPage - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    setDisplayedUsers(filteredUsers.slice(startIndex, endIndex));
  }, [filteredUsers, currentPage, usersPerPage]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleToggleUserType = async (userId, currentType) => {
    try {
      setActionLoading(userId);
      const newType = currentType === "business" ? "regular" : "business";
      await updateUserStatus(token, userId, {
        isBusiness: newType === "business",
      });

      const updateUserInArray = (users) =>
        users.map((user) =>
          user._id === userId
            ? { ...user, isBusiness: newType === "business" }
            : user
        );

      setAllUsers((prev) => updateUserInArray(prev));
      setFilteredUsers((prev) => updateUserInArray(prev));
    } catch (err) {
      setError("Failed to update user type.");
    } finally {
      setActionLoading("");
    }
  };

  const handleDeleteClick = (user) => {
    setDeleteDialog({ open: true, user });
  };

  const handleDeleteConfirm = async () => {
    try {
      setActionLoading(deleteDialog.user._id);
      await deleteUser(token, deleteDialog.user._id);

      const filterUserFromArray = (users) =>
        users.filter((user) => user._id !== deleteDialog.user._id);

      setAllUsers(filterUserFromArray(allUsers));
      setFilteredUsers(filterUserFromArray(filteredUsers));
      setDeleteDialog({ open: false, user: null });
    } catch (err) {
      setError("Failed to delete user.");
    } finally {
      setActionLoading("");
    }
  };

  const handleDeleteCancel = () => {
    setDeleteDialog({ open: false, user: null });
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="50vh"
        >
          <CircularProgress size={50} />
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={8} sx={{ p: 4, borderRadius: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
          <AdminPanelSettings
            sx={{ fontSize: 50, color: "primary.main", mr: 2 }}
          />
          <Box>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              fontWeight="bold"
            >
              User Management (CRM)
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Manage all users and their account types
            </Typography>
          </Box>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }} onClose={() => setError("")}>
            {error}
          </Alert>
        )}
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          onClearSearch={handleClearSearch}
        />
        <PaginationInfo
          searchTerm={searchTerm}
          filteredUsers={filteredUsers}
          currentPage={currentPage}
          usersPerPage={usersPerPage}
          totalPages={totalPages}
        />
        <UsersTable
          users={displayedUsers}
          currentUser={currentUser}
          actionLoading={actionLoading}
          onToggleUserType={handleToggleUserType}
          onDeleteClick={handleDeleteClick}
        />
        {totalPages > 1 && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
              size="large"
              showFirstButton
              showLastButton
            />
          </Box>
        )}
        <UserStats users={allUsers} />
      </Paper>
      <DeleteUserDialog
        open={deleteDialog.open}
        user={deleteDialog.user}
        loading={actionLoading}
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      />
    </Container>
  );
};
export default CRM;
