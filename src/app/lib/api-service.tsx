'use client';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';

function useFetchUserLogin() {
  const { data, refetch } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const userLoginResponse = await axios.get(
        `https://notes-api.dicoding.dev/v1/users/me`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      return userLoginResponse.data.data.name;
    },
  });
  return {
    data,
    refetch,
  };
}

function usePostNote({ onSuccess }: { onSuccess: () => void }) {
  return useMutation({
    mutationFn: async (body: Body) => {
      const noteResponse = await axios.post(
        `https://notes-api.dicoding.dev/v1/notes`,
        body,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      return noteResponse.data;
    },
    onSuccess,
  });
}

function useNoteNotArchived() {
  const { data, refetch } = useQuery({
    queryKey: ['not archived'],
    queryFn: async () => {
      const noteNotArchived = await axios.get(
        `https://notes-api.dicoding.dev/v1/notes`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      return noteNotArchived.data;
    },
  });
  return {
    data,
    refetch,
  };
}
function useDeleteNote({ onSuccess }: { onSuccess: () => void }) {
  return useMutation({
    mutationFn: async (note_id) => {
      const deleteNote = await axios.delete(
        `https://notes-api.dicoding.dev/v1/notes/${note_id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      return deleteNote.data;
    },
    onSuccess,
  });
}
export { useFetchUserLogin, usePostNote, useNoteNotArchived, useDeleteNote };
