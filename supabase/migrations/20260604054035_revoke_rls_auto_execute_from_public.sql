/*
  # Revoke public EXECUTE on rls_auto_enable SECURITY DEFINER function

  1. Security Issue
    - The function `public.rls_auto_enable()` is defined as SECURITY DEFINER,
      meaning it executes with the privileges of the function owner (postgres),
      not the caller.
    - Currently, anon, authenticated, and PUBLIC roles all have EXECUTE permission.
    - This allows any anonymous or authenticated user to call this function
      via /rest/v1/rpc/rls_auto_enable and execute it with elevated privileges.

  2. Changes
    - REVOKE EXECUTE from PUBLIC (the default grant)
    - REVOKE EXECUTE from anon role
    - REVOKE EXECUTE from authenticated role
    - Retain EXECUTE for postgres and service_role only

  3. Important Notes
    - This function should only be callable by database administrators
      or the Supabase service role, not by end users
    - SECURITY DEFINER functions with public access are a critical
      security risk as they can escalate privileges
*/

REVOKE EXECUTE ON FUNCTION public.rls_auto_enable() FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.rls_auto_enable() FROM anon;
REVOKE EXECUTE ON FUNCTION public.rls_auto_enable() FROM authenticated;
